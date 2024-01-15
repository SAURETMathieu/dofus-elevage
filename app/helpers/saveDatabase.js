const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const sequelize = require('../database.js');

const backupPath = './data/saves';
const backupFileNamePrefix = 'backup';
const maxBackupDays = 7;
const backupIntervalHours = 12;

function getCurrentTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[-T:.]/g, '').slice(0, -5);
}

function runBackup() {
  const backupFileName = `${backupFileNamePrefix}_${getCurrentTimestamp()}.sql`;

  const dumpCommand = `pg_dump -h ${sequelize.config.host}${sequelize.config.username ? ` -U ${sequelize.config.username}` : ''} -d ${sequelize.config.database} -F c -b -v -f ${path.join(backupPath, backupFileName)}`;

  exec(dumpCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de la sauvegarde : ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Erreur lors de la sauvegarde : ${stderr}`);
      return;
    }

    console.log(`Sauvegarde réussie : ${backupFileName}`);
  });
}

function removeOldBackups() {
  const files = fs.readdirSync(backupPath);

  files.forEach((file) => {
    const filePath = path.join(backupPath, file);
    const fileAgeHours = (Date.now() - fs.statSync(filePath).mtime.getTime()) / (1000 * 60 * 60);

    if (fileAgeHours > maxBackupDays * 24) {
      fs.unlinkSync(filePath);
      console.log(`Ancienne sauvegarde supprimée : ${file}`);
    }
  });
}

function startBackupProcess() {
  try {
    runBackup();
    removeOldBackups();
  } catch (err) {
    console.error(`Erreur lors du processus de sauvegarde : ${err.message}`);
  }
}

function initBackup() {
  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath, { recursive: true });
  }
  startBackupProcess();
  setInterval(() => {
    startBackupProcess();
  }, backupIntervalHours * 60 * 60 * 1000);
}

module.exports = {
  initBackup,
};

// example for restoring db
// DROP la db et la recreer avant
// pg_restore -d dofusbis -h localhost -v ./data/saves/backup_2024011515570.sql
