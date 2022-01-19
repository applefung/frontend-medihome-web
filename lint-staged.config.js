module.exports = {
    '*.ts?(x)': () => 'tsc --project tsconfig.json --noEmit',
    '*.(ts|js)?(x)': ['prettier --write', 'eslint'],
    '*.{scss,css}': ['prettier --write'],
  };