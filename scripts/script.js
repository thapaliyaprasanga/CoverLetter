
        const params = new URL(document.location).searchParams;
        const name = params.get("name");
        const email = params.get("email");
        const mobile = params.get("mobile");
        const domainName = params.get("domainName");
        const extension = params.get("extension");

        document.querySelectorAll(".name").forEach((item) => {
          item.innerText = name;
        });
        document.querySelector("#email").innerText = email;
        document.querySelector("#mobile").innerText = mobile;
        document.querySelectorAll(".domain-extension").forEach((item) => {
          item.innerText = domainName + "." + extension;
        });
        document.querySelector(
          "#just-domain-extension"
        ).innerText = extension;

        const date = new Date().toDateString()
        document.querySelector('#submitted-date').textContent = date

      function screenshot() {
        html2canvas($("#application-div"), {
          onrendered: function (canvas) {
            // console.log(canvas.toDataURL("image/png",0.9));
            var a = document.createElement("a");
            a.href = canvas.toDataURL("image/png", 0.9);
            a.download = "coverLetter.png";
            a.click();
          },
        });
      }
