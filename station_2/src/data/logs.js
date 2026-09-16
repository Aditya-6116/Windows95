// System access log entries for Station 2
export const systemLogs = [
  { time: '23:18', user: 'SYSTEM',       event: 'BOOT',          detail: 'System started.' },
  { time: '23:21', user: 'PROJECT-ECHO', event: 'ACCESS',        detail: 'File accessed: ECHO-ARCHIVE' },
  { time: '23:26', user: 'A-17',         event: 'LOGIN SUCCESS', detail: 'Session opened.' },
  { time: '23:27', user: 'SYSTEM',       event: 'ACTIVE',        detail: 'Idle state cleared.' },
  { time: '23:28', user: 'A-17',         event: 'LOGIN SUCCESS', detail: 'Session resumed.' },
  { time: '23:31', user: 'CCTV',         event: 'ACCESS',        detail: 'Feed: LAB-CAM-02' },
  { time: '23:37', user: 'PROJECT-ECHO', event: 'MODIFY',        detail: 'Record updated.' },
  { time: '23:43', user: 'SYSTEM',       event: 'SHUTDOWN',      detail: 'Initiated by user.' },
];

export default systemLogs;
