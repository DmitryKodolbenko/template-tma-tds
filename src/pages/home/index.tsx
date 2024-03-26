/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect } from 'react'
import WebAppSDK from '@twa-dev/sdk'
import { useTonConnectUI } from '@tonconnect/ui-react'

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
    const [ tonConnectUI ] = useTonConnectUI()

    useEffect(() => {
        WebAppSDK.MainButton.enable()
        WebAppSDK.MainButton.show()
        WebAppSDK.MainButton.text = 'Swap'
        WebAppSDK.MainButton.textColor = WebAppSDK.themeParams.button_text_color
        WebAppSDK.MainButton.color = WebAppSDK.themeParams.button_color

        if (!tonConnectUI.connected) {
            WebAppSDK.MainButton.disable()
            WebAppSDK.MainButton.text = 'Wallet not found'
            WebAppSDK.MainButton.textColor = WebAppSDK.themeParams.hint_color
            WebAppSDK.MainButton.color = WebAppSDK.themeParams.secondary_bg_color
        }
    }, [ tonConnectUI.connected ])

    return (
        <div>
        </div>
    )
}
