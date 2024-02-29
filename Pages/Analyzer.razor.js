export class Analyzer {
    static test() {
        //console.log("Test1");

        //fetch("https://auth.web3auth.io/v6/favicon.png", {
        //    mode: 'no-cors'
        //}).then(x => console.log(x)).catch(e => console.log(e));

        //console.log("Test2");
    }

    static jsFetch(address, call) {
        return new Promise((resolve, reject) => {
            fetch(address, {
                mode: 'no-cors'
            }).then(x => resolve(x.status)).catch(e => reject(-1));
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

    static jsGetIPData() {
        return new Promise((resolve, reject) => {
            var url = 'http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,query';
            const callbackName = 'jsonpCallback' + Math.round(100000 * Math.random());
            window[callbackName] = function (data) {
                delete window[callbackName];
                document.body.removeChild(script);

                console.log(data);
                resolve(data);
            };

            const script = document.createElement('script');
            script.src = `${url}&callback=${callbackName}`;

            console.log("jsGetIPData");
            console.log(script.src);

            document.body.appendChild(script);
        });
    }
}

window.Analyzer = Analyzer;