export class Analyzer {
    static test() {
        console.log("Test1");

        //fetch("https://auth.web3auth.io/v6/favicon.png", {
        //    mode: 'no-cors'
        //}).then(x => console.log(x)).catch(e => console.log(e));
        
        console.log("Test2");
    }

    static jsFetch(address, call) {
        return new Promise((resolve, reject) => {
            fetch(address, {
                mode: 'no-cors'
            }).then(x => resolve(x.status)).catch(e => reject(-1));
        });
    }
}

window.Analyzer = Analyzer;