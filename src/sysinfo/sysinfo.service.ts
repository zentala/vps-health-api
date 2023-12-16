import { Injectable } from '@nestjs/common';
import * as si from 'systeminformation';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface CpuInfo {
  usage: string;
  total: string;
  cores: number[];
}

interface RamInfo {
  usage: string;
  total: string;
  free: string;
  used: string;
}

interface DiskInfo {
  usage: string;
  total: string;
}

interface OsInfo {
  platform: string;
  distro: string;
  release: string;
  codename: string;
  kernel: string;
  arch: string;
  codepage: string;
  logofile: string;
  uptime: number;
}

interface NetworkInfo {
  ip4: string;
  ip6: string;
  fqdn: string;
  iface: string;
}

export interface SystemInfo {
  resources: {
    cpu: CpuInfo;
    ram: RamInfo;
    disk: DiskInfo;
  };
  osInfo: OsInfo;
  network: NetworkInfo;
}

@Injectable()
export class SysInfoService {
  private async getNetworkDetails(): Promise<any> {
    const networkInterfaces = await si.networkInterfaces();
    const networkStats = await si.networkStats();
    
    let eth0Interface;
    if (Array.isArray(networkInterfaces)) {
      eth0Interface = networkInterfaces.find(iface => iface.iface === 'eth0');
    } else {
      eth0Interface = networkInterfaces.iface === 'eth0' ? networkInterfaces : null;
    }

    const defaultInterface = eth0Interface || networkStats.find(stat => stat.iface === 'eth0') || networkStats[0];

    return {
      ip4: defaultInterface.ip4 || 'N/A',
      ip6: defaultInterface.ip6 || 'N/A',
      fqdn: await si.osInfo().then(info => info.fqdn),
      iface: defaultInterface.iface
    };
  }

  private formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  private async getDiskInfo(): Promise<{ usage: string; total: string }> {
    const fsSize = await si.fsSize();
    const total = fsSize.map(fs => fs.size).reduce((a, b) => a + b, 0);
    const used = fsSize.map(fs => fs.used).reduce((a, b) => a + b, 0);
    return {
      usage: ((used / total) * 100).toFixed(0) + '%',
      total: this.formatBytes(total)
    };
  }

  public async getSystemInfo(): Promise<SystemInfo> {
    try {
      const cpuLoad = await si.currentLoad();
      const cpuData = await si.cpu();

      const cpu = {
        usage: cpuLoad.currentLoad.toFixed(0) + '%',
        total: `${cpuData.cores} x ${cpuData.speed}GHz`,
        cores: cpuLoad.cpus.map(core => parseFloat(core.load.toFixed(0)))
      };

      const mem = await si.mem();
      const ram = {
        usage: ((mem.used / mem.total) * 100).toFixed(0) + '%',
        total: this.formatBytes(mem.total),
        free: this.formatBytes(mem.free),
        used: this.formatBytes(mem.used)
      };

      const disk = await this.getDiskInfo();

      const uptime = si.time().uptime;
      const network = await this.getNetworkDetails();
      const fullOsInfo = await si.osInfo();

      const {
        serial, build, servicepack, uefi, hostname, fqdn, ...osInfo
      } = fullOsInfo;

      return {
        resources: {
          cpu,
          ram,
          disk
        },
        osInfo: { ...osInfo, uptime },
        network
      };
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
