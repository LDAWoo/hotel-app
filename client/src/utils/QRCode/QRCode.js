import QRCode from 'qrcode'

export const generateQR = async (text) => {
    try {
        return QRCode.toDataURL(text, {
            margin: 1,
            scale: 0,
            version: 14,
            type: 'image/png',
            errorCorrectionLevel: 'medium',
            width: 154,
            maskPattern: 7,
        })
    } catch (err) {
        console.error(err)
    }
}

