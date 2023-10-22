import React, { useState } from "react";
import OpenAI from "openai";
import '../components/Create-Pendaftaran/CreatePendaftaran.css'

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
            prompt: `result the following command: ${command}`,
            model: "text-davinci-003",

            // prompt: command,
            // model: 'text-davinci-003'
            // messages: [
            //     {role: "system", content: command},
            // ],
            // model: "gpt-3.5-turbo",
        });

        // setResult(res.choices)
        setResult(res.choices[0].text);
        setLoading(false);
        console.log('result', res);
    }

    return (
        <>
            <div className="m-5 p-4">
                <h2>Chat AI For Q & A</h2>
                <textarea
                    name="command"
                    id="command"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="Ask a question..."
                    className="input-group p-2 input"
                />
                <button type="submit" className="btn btn-info mt-2" onClick={(e) => handleSubmit(e)}>Submit</button>

                {
                    loading && (
                        <div className="loader"></div>
                    )
                }

                {
                    // result.length > 0 && result.map((item, index) => (
                    //     <div className="mt-2" key={index}>
                    //         <p>{item.message.content}</p>
                    //     </div>
                    // ))

                    result && (
                        <div className="mt-2">
                            <p>Answer: {result}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ChatAi;