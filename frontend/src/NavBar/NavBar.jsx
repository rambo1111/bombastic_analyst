import { useState } from "react";
import UploadCSV from "./UploadCSV.jsx"
import Graphs from "./Graphs.jsx"
import Insights from "./Insights.jsx"
import RAGAgent from "./RAGAgent.jsx"
import './NavBar.jsx'
import styles from './NavBar.module.css'
const Tabs = [
    {id: "upload", label: "Upload"},
    {id: "graphs", label: "Graphs"},
    {id: "insights", label: "Insights"},
    {id: "rag", label: "RAG Agent"}
]

function NavBar(){
    const [activeTab, setActiveTab] = useState("upload")

    return(
        <div className="page">
            <div className={styles.nav_bar}>
                {Tabs.map((e)=>(
                    <button
                     key={e.id}
                     onClick={() => setActiveTab(e.id)}
                     className={`${styles.tab_btn} ${activeTab === e.id ? styles.active : ""}`}
                    >
                        {e.label}
                    </button>
                ))}
            </div>
            <div className={styles.separator}>.</div>

            <div className="content-area">
                {activeTab === "upload" && <UploadCSV />}
                {activeTab === "graphs" && <Graphs />}
                {activeTab === "insights" && <Insights />}
                {activeTab === "rag" && <RAGAgent />}
            </div>
        </div>
    )

}

export default NavBar