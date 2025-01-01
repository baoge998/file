#!/bin/bash

# 启动 webssh 程序
nohup python /usr/home/fanuccisr/domains/webssh.baoge456.us.kg/public_html/run.py --port=31400 --font='Consolas.ttf' --xsrf=False --xheaders=False --origin='*' --debug --delay=6 > /dev/null 2>&1 &