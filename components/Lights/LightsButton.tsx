import React, {useEffect, useState} from "react";
import axios from "axios";

const LightsButton = ({id}: { id: string }) => {
    const [lightLoading, setLightLoading] = useState(true)
    const [lightState, setLightState] = useState(false)

    useEffect(() => {
        checkLightState(id).then((res) => {
            if (res && res.data.state.on) {
                setLightState(true)
            } else {
                setLightState(false)
            }

            setLightLoading(false);
        })
    });

    const turnLightOnOrOff = async (id: string, onOff: boolean, hue?: number, sat?: number, bri?: number ) => {
        const url = `http://${process.env.NEXT_PUBLIC_HUE_IP}/api/${process.env.NEXT_PUBLIC_HUE_USER}/lights/${id}/state`;

        setLightLoading(true);

        try {
            await axios.put(url, {
                on: onOff,
                ...(hue && { hue }),
                ...(sat && { sat }),
                ...(bri && { bri }),
            });

            const lightState = await checkLightState(id);

            if (lightState && lightState.data.state.on) {
                setLightState(true)
            } else {
                setLightState(false)
            }

            setLightLoading(false);

            return true

        } catch (err) {
            console.error(err);
            setLightLoading(false)
        }
    };

    const checkLightState = async (id: string) => {
        const url = `http://${process.env.NEXT_PUBLIC_HUE_IP}/api/${process.env.NEXT_PUBLIC_HUE_USER}/lights/${id}`;

        try {
            return await axios.get(url);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {!lightLoading && (
                <>
                <button
                    className={`p-4 rounded-full ${lightState ? `bg-green-500` : `bg-red-700`}`}
                    onClick={() => turnLightOnOrOff(id, !lightState ? true : false)}
                />&nbsp;
                <button className="p-4 rounded-full bg-red-400" onClick={() => turnLightOnOrOff(id, true, 1, 150, 175)}>RED</button>
                </>
            )}
        </>
    )
}

export default LightsButton;
