(function() {

    var pl = "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";
    
    var submitPass = document.getElementById('submitPass');
    var passEl = document.getElementById('pass');
    var invalidPassEl = document.getElementById('invalidPass');
    var trycatcherror = document.getElementById('trycatcherror');
    var successEl = document.getElementById('success');
    var contentFrame = document.getElementById('contentFrame');
    
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
