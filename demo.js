#!/usr/bin/env node
const shell = require("shelljs");
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
} else {
  shell.echo('git 安装成功');
}