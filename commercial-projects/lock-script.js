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
