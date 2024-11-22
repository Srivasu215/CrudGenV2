import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/pressingScan.js';

const StartFunc = ({ inTable, inQrCodeId }) => {
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    dbForQrCodes.read();

    let LocalQrCheck = dbForQrCodes.data.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `Sent to pressing QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };