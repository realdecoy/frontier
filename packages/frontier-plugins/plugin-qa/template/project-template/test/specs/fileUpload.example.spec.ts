import {expect} from 'chai';
import FileUploadPage from '@/page_objects/file-upload-page';
import path = require('path');

describe('File upload Example', () => {
    it('should upload a file successfully', async () => {
        const imageName = 'webdriverIO.png';
        const filePath = path.join(__dirname, '../../src/assets/webdriverIO.png');

        await FileUploadPage.open;
        await FileUploadPage.chooseFile(filePath);
        await browser.pause(2000)
        await FileUploadPage.upload;
                  
        let element =  await FileUploadPage.uploadedFiles;
        expect(element).to.eq(imageName);
    });
});
