# RapidOCRServer
RapidOCR HTTP 服务。win32程序，易语言编写。

>本程序采用易语言编写，可能存在杀毒软件误报。

>如不信任，请立即停止使用+删除+拉黑。

### 软件/Demo下载
[https://github.com/Physton/RapidOCRServer/releases/tag/1.2.0](https://github.com/Physton/RapidOCRServer/releases/tag/1.2.0)

- 123云盘(不限速)：[https://www.123pan.com/s/HcqbVv-xT0I.html](https://www.123pan.com/s/HcqbVv-xT0I.html) 提取码:Y83j
- 百度网盘：[https://pan.baidu.com/s/1X3TpUlqqdEba9pdEkEciAA?pwd=rxee](https://pan.baidu.com/s/1X3TpUlqqdEba9pdEkEciAA?pwd=rxee)

### 更新说明
##### v1.2.0 (2023.03.23)
- 修复了端口小于9292重启软件失效的问题
- 接口增加了Output，输出数据内容，可以选择full或small。full为默认，输出的数据中包含可信度、位置等消息。small则只有Text。
- 接口增加了Format，可选择输出json或纯文本（纯文本模式下，Output无效）
##### v1.1.0 (2023.03.21)
- 更新了 RapidOCR.dll
- 支持 Windows Server 使用了
- 返回的每行文本中增加了Single（每个文字的可信度和位置，程序未解析成JSON，需自行解析字符串）

### Demo使用说明
nodejs: [https://github.com/Physton/RapidOCRServer/tree/main/Demo/nodejs](https://github.com/Physton/RapidOCRServer/tree/main/Demo/nodejs)

### 示例
![](https://raw.githubusercontent.com/Physton/RapidOCRServer/main/screenshot/1.png)
![](https://raw.githubusercontent.com/Physton/RapidOCRServer/main/screenshot/2.png)

### 感谢以下作者（排名不分先后）：
RapidOCR dll：[精易论坛/l李逍遥](https://bbs.125.la/forum.php?mod=viewthread&tid=14743112&highlight=PaddleOCR)

PaddleOCR：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)

RapidOCR：[RapidAI/RapidOCR](https://github.com/RapidAI/RapidOCR)

CCHTTP：[精易论坛/浅浅`](https://bbs.125.la/forum.php?mod=viewthread&tid=14724915)

zyJson：[kyozy](https://gitee.com/kyozy)

精易模块：[广大易友/精益论坛](http://ec.125.la/)

窗体客户区扩展：荼泱
