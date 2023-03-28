import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";

const EditorOrders = () => {
	const [currentData, setCurrentData] = useState("");

	//Edytor
	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	//data show
	const dataShow = () => {
		setCurrentData(editorRef.current.getContent());
	};

	return (
		<>
			<Editor
				apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
				onInit={(evt, editor) => (editorRef.current = editor)}
				initialValue="<p>To jest edytor zamowien</p>"
				init={{
					float: "right",
					width: "70vw",
					height: "100vh",
					menubar: false,
					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"code",
						"help",
						"wordcount",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			{/* <button onClick={log}>Log editor content</button>
			<button onClick={dataShow}>Show me what u are writing</button> */}
			{/* <div dangerouslySetInnerHTML={{ __html: currentData }}></div> */}
		</>
	);
};

export default EditorOrders;
