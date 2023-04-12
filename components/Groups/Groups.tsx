"use client"

import React, {useState, useEffect} from 'react';
import LightsButton from "./LightsButton";

import {SiPhilipshue} from "react-icons/si";

// Define a type for the group data
type GroupData = {
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

const Groups = () => {
    const [groupsData, setGroupsData] = useState<Record<string, GroupData> | null>(null);

    useEffect(() => {
        const fetchGroupsData = async () => {
            try {
                const response = await fetch('/api/hue');
                const data = await response.json();
                setGroupsData(data.groups);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGroupsData().then();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold self-start">Philips Hue</h2>
                <span className="text-4xl self-end"><SiPhilipshue/></span>
            </div>
            <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10 w-full">
                <div className="grid">
                    <div className="grid grid-cols-3 gap-4">
                        <div><strong>ID</strong></div>
                        <div><strong>Name</strong></div>
                        <div><strong>Type</strong></div>
                    </div>
                    {groupsData ? (
                        Object.keys(groupsData).map(groupId => {
                            const group = groupsData[groupId];
                            return (
                                <div className="grid grid-cols-3 gap-4 my-4" key={groupId}>
                                    <div>{groupId}</div>
                                    <div>{group.name}</div>
                                    <div>{group.type}</div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Loading Philips Hue groups data...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Groups;
