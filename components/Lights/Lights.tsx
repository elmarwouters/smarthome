"use client"

import React, {useState, useEffect} from 'react';
import LightsButton from "./LightsButton";

import {SiPhilipshue} from "react-icons/si";

// Define a type for the light data
type LightData = {
    state: {
        on: boolean;
        bri: number;
        hue: number;
        sat: number;
        effect: string;
        xy: [number, number];
        ct: number;
        alert: string;
        colormode: string;
        mode: string;
        reachable: boolean;
    };
    swupdate: {
        state: string;
        lastinstall: string;
    };
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    productname: string;
    capabilities: {
        certified: boolean;
        control: {
            mindimlevel: number;
            maxlumen: number;
            colorgamuttype: string;
            colorgamut: [number, number][];
            ct: {
                min: number;
                max: number;
            };
        };
        streaming: {
            renderer: boolean;
            proxy: boolean;
        };
    };
    config: {
        archetype: string;
        function: string;
        direction: string;
        startup: {
            mode: string;
            configured: boolean;
        };
    };
    uniqueid: string;
    swversion: string;
    swconfigid: string;
    productid: string;
};

const Lights = () => {
    const [lightsData, setLightsData] = useState<Record<string, LightData> | null>(null);

    useEffect(() => {
        const fetchLightsData = async () => {
            try {
                const response = await fetch('/api/hue');
                const data = await response.json();
                setLightsData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLightsData().then();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold self-start">Philips Hue Lights</h2>
                <span className="text-4xl self-end"><SiPhilipshue/></span>
            </div>
            <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10 w-full">
                <div className="grid">
                    <div className="grid grid-cols-4 gap-4">
                        <div><strong>ID</strong></div>
                        <div><strong>Name</strong></div>
                        <div><strong>Type</strong></div>
                        <div><strong>On/Off</strong></div>
                    </div>
                    {lightsData ? (
                        Object.keys(lightsData).map(lightId => {
                            const light = lightsData[lightId];
                            return (
                                <div className="grid grid-cols-4 gap-4 my-4" key={lightId}>
                                    <div>{lightId}</div>
                                    <div>{light.name}</div>
                                    <div>{light.type}</div>
                                    <div className="h-1 w-1 flex">
                                        <LightsButton id={lightId}/>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Loading Philips Hue lights data...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lights;
