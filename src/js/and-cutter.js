class AndCutter {

    static html() {
        return `
        <div class="and-cutter">
            <p>Trim your url to a single query url.</p>
            <div class="input-group">
                <label for="text">Text</label>
                <textarea id="text" rows="4" cols="50"></textarea>
            </div>
            <div class="output-group">
                <label for="output">Output</label>
                <textarea id="output" rows="4" cols="50"></textarea>
            </div>
            <button id="copy-button">Copy</button>
        </div>
        `;
    }

    static css() {
        return `
        <style>
            .and-cutter {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            .input-group, .output-group {
                margin-bottom: 10px;
                width: 100%;
            }
            label {
                font-weight: bold;
            }
            textarea {
                width: 100%;
                resize: none;
            }
            input[type="number"] {
                width: 100%;
            }
            button {
                margin-top: 10px;
                padding: 10px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover {
                background-color: #0056b3;
            }
            .and-cutter h1 {
                color: #007BFF;
            }
            .and-cutter p {
                color: #555;
            }
            .and-cutter .input-group {
                margin-bottom: 20px;
            }
            .and-cutter .output-group {
                margin-bottom: 20px;
            }
            .and-cutter .input-group label,
            .and-cutter .output-group label {
                font-size: 1.2em;
                margin-bottom: 5px;
            }
            .and-cutter .input-group textarea,
            .and-cutter .output-group textarea {
                font-size: 1em;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            .and-cutter .input-group input[type="number"] {
                font-size: 1em;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            .and-cutter button {
                font-size: 1em;
                padding: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                background-color: #007BFF;
                color: white;
            }
            .and-cutter button:hover {
                background-color: #0056b3;
            }
            .and-cutter button:active {
                background-color: #004085;
            }
            .and-cutter button:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }
            .and-cutter button:disabled:hover {
                background-color: #ccc;
            }
            .and-cutter button:disabled:active {
                background-color: #ccc;
            }
            .and-cutter button:disabled:focus {
                outline: none;
            }
            .and-cutter button:focus {
                outline: none;
                box-shadow: 0 0 5px #007BFF;
            }
        </style>
        `;
    }

    static setup() {
        document.getElementById('text').addEventListener('input', (event) => {
            const text = event.target.value;
            const output = AndCutter.trim(text);
            document.getElementById('output').value = output;
        });

        document.getElementById('copy-button').addEventListener('click', () => {
            const output = document.getElementById('output');
            output.select();
            document.execCommand('copy');
        });
    }
    static trim(url) {
        const urlParts = url.split('?');
        if (urlParts.length < 2) {
            return url;
        }
        const baseUrl = urlParts[0];
        const queryParams = urlParts[1].split('&').slice(0, 1).join('&');
        return `${baseUrl}?${queryParams}`;
    }
};

export { AndCutter };