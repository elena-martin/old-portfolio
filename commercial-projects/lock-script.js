(function() {

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
        if (keyCode == '13'){
          // Enter pressed
          doSubmit();
          return false;
        }
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
