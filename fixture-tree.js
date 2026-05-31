import process from 'node:process';
import childProcess from 'node:child_process';
import fs from 'node:fs';

const readyFile = process.argv[2];

const child = childProcess.spawn(process.execPath, ['-e', 'setInterval(() => {}, 10_000);'], {
	stdio: 'ignore',
});

fs.writeFileSync(readyFile, String(child.pid));

setInterval(() => {}, 10_000);
