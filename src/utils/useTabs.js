// useTabs.js
import { useState } from 'react';

export const useTabs = (initialTab, tabContents) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderTabContent = () => tabContents[activeTab].content;
    const renderTabTitle = () => tabContents[activeTab].title;
    const renderTabResult = () => tabContents[activeTab].result ? tabContents[activeTab].result() : null;

    return { activeTab, handleTabClick, renderTabContent, renderTabTitle, renderTabResult };
};
