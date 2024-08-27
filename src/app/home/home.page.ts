import { Component } from '@angular/core';
import { InAppBrowser, ToolBarType } from '@capgo/inappbrowser';
import { OpenWebViewOptions, NewOpenWebOptions } from '@capgo/inappbrowser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  ngOnit() {}

  async testOpen() {
    const options = {
      url: 'https://es.wikipedia.org',
    };

    try {
      await InAppBrowser.open(options);
    } catch (error) {
      console.error('Failed to open browser:', error);
    }
  }

  async testOpenWebView() {
    const options: OpenWebViewOptions = {
      url: 'https://es.wikipedia.org',
      headers: { 'Custom-Header': 'value' },
      shareDisclaimer: {
        title: 'Disclaimer',
        message: 'Share this page',
        confirmBtn: 'Confirm',
        cancelBtn: 'Cancel',
      },
      toolbarType: undefined, // or assign a valid value of type ToolBarType
      shareSubject: 'Check this out',
      title: 'New Window',
      activeNativeNavigationForWebview: true,
      disableGoBackOnNativeApplication: false,
      isPresentAfterPageLoad: true,
      isInspectable: false,
      isAnimated: true,
      showReloadButton: true,
      closeModal: true,
      closeModalTitle: 'Close',
      closeModalDescription: 'Are you sure you want to close this window?',
      closeModalOk: 'Close',
      closeModalCancel: 'Cancel',
      visibleTitle: true,
      toolbarColor: 'red',
      showArrow: false,
      ignoreUntrustedSSLError: false,
    };

    try {
      await InAppBrowser.openWebView(options);
    } catch (error) {
      console.error('Failed to open browser:', error);
    }
  }

  async testNewOpen() {
    const options: NewOpenWebOptions = {
      url: 'https://wikipedia.com',
      title: 'Test',
      showShareButton: true,
      showDownloadButton: true,
      showNavigationButtons: true,
      toolbarType: ToolBarType.NAVIGATION,
      customTextShareButton: "Custom",
      colorShareButton: "red",
      colorShareText: "blue",
      shareFunction: false,
      printFunction: false,
      colorTitle: "green",
      browserPosition: "bottom"
    };

    console.log('options', options);

    try {
      await InAppBrowser.openWeb(options);

      await InAppBrowser.addListener('shareButtonClicked', () => {
        alert('El botón de compartir fue presionado Porfin');
      });
    } catch (error) {
      console.error('Failed to open browser:', error);
      alert('Failed to open browser: ' + error);
    }
  }

  async alertFunction() {
    console.log('console log called')
    alert('Alert function called');
  }
}
