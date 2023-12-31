import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import OpenAI from "openai";
import Footer from "../../components/Footer";
import "./ChatAi.css"

function ChatAi() {
    const [command, setCommand] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true,
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await openai.completions.create({
            prompt: "Seputar pendaftaran murid baru program Pra-SD, SD, dan Privat di Pena Cemerlang." + command,
            model: "text-davinci-003",
        });

        setResult(res.choices[0].text);
        setLoading(false);
        console.log('result', res);
    }

    return (
        <>
            <Navbar/>
                <div className="text-fredoka body-chat">
                    <h2 className="mb-3">Chat Bot AI For Q & A</h2>
                    <textarea
                        name="command"
                        id="command"
                        value={command}
                        onChange={(e) => setCommand(e.target.value)}
                        placeholder="Ask a question..."
                        className="input-group p-2 chat-input"
                    />
                    <button type="submit" className="mt-2 button-chat" onClick={(e) => handleSubmit(e)}>KIRIM</button>

                    {
                        loading && (
                            <div className="loader"></div>
                        )
                    }

                    {
                        result && (
                            <div className="mt-2">
                                <p>Answer: {result}</p>
                            </div>
                        )
                    }
                </div>
            <Footer/>
        </>
    )
}

export default ChatAi;