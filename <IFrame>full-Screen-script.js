window.onload = function () {
      const iframe = document.querySelector('iframe');
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode: " + err.message);
        });
      }
    };
