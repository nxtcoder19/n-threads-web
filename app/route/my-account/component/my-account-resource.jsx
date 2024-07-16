import {useState} from "react";
import {General} from "@/app/route/my-account/component/general";
import {ManagedAddress} from "@/app/route/my-account/component/managed-address";

const tabs = [
    { id: 1, label: 'General', content: <General/> },
    { id: 2, label: 'Manage Addresses', content: <ManagedAddress/> },
    { id: 3, label: 'Tab 3', content: 'Content for Tab 3' },
];

export const MyAccountResource = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex py-4">
            <div className="w-1/5">
                <ul className="space-y-2">
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`p-4 text-sm cursor-pointer ${activeTab === tab.id ? 'bg-gray-100 text-blue-400 rounded-lg' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-4/5 p-4">
                {tabs.map((tab) => (
                    <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

