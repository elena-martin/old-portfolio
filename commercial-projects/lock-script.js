(function() {
    if (sessionStorage.entered === 'true'){
        window.open("./commercial-lock.html", target="_self")
    }
    var pl = "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";
    
    var submitPass = document.getElementById('submitPass');
    var passEl = document.getElementById('pass');
    var invalidPassEl = document.getElementById('invalidPass');
    var trycatcherror = document.getElementById('trycatcherror');
    var successEl = document.getElementById('success');
    var contentFrame = document.getElementById('contentFrame');
    var att = document.querySelector("#attribution");
    
    // Sanity checks

    if (pl === "") {
        submitPass.disabled = true;
        passEl.disabled = true;
        alert("This page is meant to be used with the encryption tool. It doesn't work standalone.");
        return;
    }

    if (!isSecureContext) {
        document.querySelector("#passArea").style.display = "none";
        document.querySelector("#securecontext").style.display = "block";
        return;
    }

    if (!crypto.subtle) {
        document.querySelector("#passArea").style.display = "none";
        document.querySelector("#nocrypto").style.display = "block";
        return;
    }
    
    function str2ab(str) {
        var ustr = atob(str);
        var buf = new ArrayBuffer(ustr.length);
        var bufView = new Uint8Array(buf);
        for (var i=0, strLen=ustr.length; i < strLen; i++) {
            bufView[i] = ustr.charCodeAt(i);
        }
        return bufView;
    }

    async function deriveKey(salt, password) {
        const encoder = new TextEncoder()
        const baseKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveKey'],
        )
        return await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
            baseKey,
            { name: 'AES-GCM', length: 256 },
            true,
            ['decrypt'],
        )
    }
    
    async function doSubmit(evt) {
        submitPass.disabled = true;
        passEl.disabled = true;

        let iv, ciphertext, key;
        
        try {
            var unencodedPl = str2ab(pl);

            const salt = unencodedPl.slice(0, 32)
            iv = unencodedPl.slice(32, 32 + 16)
            ciphertext = unencodedPl.slice(32 + 16)

            key = await deriveKey(salt, passEl.value);
        } catch (e) {
            trycatcherror.style.display = "inline";
            console.error(e);
            return;
        }

        try {
            const decryptedArray = new Uint8Array(
                await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
            );

            let decrypted = new TextDecoder().decode(decryptedArray);

            if (decrypted === "") throw "No data returned";

            const basestr = '<base href="." target="_top">';
            const anchorfixstr = `
                <script>
                    Array.from(document.links).forEach((anchor) => {
                        const href = anchor.getAttribute("href");
                        if (href.startsWith("#")) {
                            anchor.addEventListener("click", function(e) {
                                e.preventDefault();
                                const targetId = this.getAttribute("href").substring(1);
                                const targetEl = document.getElementById(targetId);
                                targetEl.scrollIntoView();
                            });
                        }
                    });
                <\/script>
            `;
            
            // Set default iframe link targets to _top so all links break out of the iframe
            if (decrypted.includes("<head>")) decrypted = decrypted.replace("<head>", "<head>" + basestr);
            else if (decrypted.includes("<!DOCTYPE html>")) decrypted = decrypted.replace("<!DOCTYPE html>", "<!DOCTYPE html>" + basestr);
            else decrypted = basestr + decrypted;

            // Fix fragment links
            if (decrypted.includes("</body>")) decrypted = decrypted.replace("</body>", anchorfixstr + '</body>');
            else if (decrypted.includes("</html>")) decrypted = decrypted.replace("</html>", anchorfixstr + '</html>');
            else decrypted = decrypted + anchorfixstr;
            
            contentFrame.srcdoc = decrypted;
            
            successEl.style.display = "inline";
            setTimeout(function() {
                dialogWrap.style.display = "none";
                att.style.display = "none";
            }, 1000);

        } catch (e) {
            invalidPassEl.style.display = "inline";
            passEl.value = "";
            submitPass.disabled = false;
            passEl.disabled = false;
            console.error(e);
            return;
        }
    }
    
    submitPass.onclick = doSubmit;
    passEl.onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        invalidPassEl.style.display = "none";
        sessionStorage.setItem('entered','true');
        if (keyCode == '13'){
          // Enter pressed
          doSubmit();
          return false;
        }
    }

    if (sessionStorage.length === 0) {
        sessionStorage.setItem('entered','false');
    }
})();


function requestPW(){
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var companyInput = document.getElementById('company');
    var messageInput = "!-----DO NOT EDIT THE SUBJECT OF THIS EMAIL-----!";

    if (nameInput.value !== "")
    window.open('mailto:lena@happyplacedesign.co?subject=%20DO%20NOT%20EDIT%20-%20Commercial%20Projects%20Password%20Request%20from%20'+ nameInput.value + '%20@%20'+  companyInput.value +'&body='+ messageInput, "_parent");
    document.querySelector("#pwRequest").style.display = "none"
    document.querySelector("#pwRequested").style.display = "block"
}
