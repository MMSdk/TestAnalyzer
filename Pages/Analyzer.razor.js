export class Analyzer {
    static test() {
        //console.log("Test1");

        //fetch("https://auth.web3auth.io/v6/favicon.png", {
        //    mode: 'no-cors'
        //}).then(x => console.log(x)).catch(e => console.log(e));

        //console.log("Test2");

        // Test
        //Analyzer.checkWebsiteAccessible('https://h5-beta.mixmarvel-sdk.com', 10000);
    }

    static jsFetch(address) {
        return new Promise((resolve, reject) => {
            fetch(address, {
                mode: 'no-cors'
            }).then(x => resolve(x.status)).catch(e => reject(-1));
        });
    }

    static checkWebsiteAccessible(url, timeout) {
        return new Promise((resolve, reject) => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            iframe.onload = function () {
                console.log('ok：', url);
                resolve(true);
                clearTimeout(timer);
            };
            iframe.onerror = function () {
                console.log('ng：', url);
                reject("error");
                clearTimeout(timer);
            };

            // 设置超时时间
            const timer = setTimeout(() => {
                console.log('timeout：', url);
                reject("timeout");
                iframe.parentNode.removeChild(iframe);
            }, timeout);

            iframe.src = url;
        });
    }

    static downloadFileFromStream = async (fileName, contentStreamReference) => {
        const arrayBuffer = await contentStreamReference.arrayBuffer();
        const blob = new Blob([arrayBuffer]);
        const url = URL.createObjectURL(blob);
        const anchorElement = document.createElement('a');
        anchorElement.href = url;
        anchorElement.download = fileName ?? '';
        anchorElement.click();
        anchorElement.remove();
        URL.revokeObjectURL(url);
    }
}

window.Analyzer = Analyzer;