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
                declare();
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
