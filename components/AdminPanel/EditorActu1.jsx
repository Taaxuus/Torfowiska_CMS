import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";

const EditorActu1 = (props) => {
	const [title, setTitle] = useState("");
	const [subtitle, setSubtitle] = useState("");
	const [image, setImage] = useState("");
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");

	//Edytor
	const editorRef1 = useRef(null);
	const editorRef2 = useRef(null);
	const editorRef3 = useRef(null);
	const editorRef4 = useRef(null);
	const editorRef5 = useRef(null);

	//data show
	const handleDataShow = () => {
		setTitle(editorRef1.current.getContent());
		setSubtitle(editorRef2.current.getContent());
		setContent(editorRef3.current.getContent());
		setImage(editorRef4.current.getContent());
		setAuthor(editorRef5.current.getContent());
		console.log(title, subtitle, image, author, content);
	};

	//DATA SEND :

	const handlerSendData = async () => {
		if (title && subtitle && image && author && content) {
			// send a request to the server.
			try {
				const body = { title, subtitle, image, content, author };
				await fetch("/api/actu", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				console.log("Dane wyslane pomyslnie");
			} catch (error) {
				console.error(error);
			}
		} else {
			console.log("All fields are required");
			return;
		}
	};

	return (
		<>
			<h2>Edytor od tytulu</h2>
			<Editor
				props={props}
				apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
				onInit={(evt, editor) => (editorRef1.current = editor)}
				initialValue={props[0]}
				init={{
					selector: "textarea",
					forced_root_block: false,
					force_br_newlines: true,
					force_p_newlines: true,
					width: "80vw",
					height: "40vh",
					menubar: true,
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
						"tinydrive",
						"insertfile",
						"paste",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help" +
						"insertfile",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>

			<h2>Edytor od podtytulu</h2>
			<Editor
				apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
				onInit={(evt, editor) => (editorRef2.current = editor)}
				initialValue="<p>To jest pierwsza aktualnosc</p>"
				init={{
					width: "80vw",
					height: "40vh",
					menubar: true,
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
						"tinydrive",
						"insertfile",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help" +
						"insertfile",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			<h2>Edytor od tresci</h2>
			<Editor
				apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
				onInit={(evt, editor) => (editorRef3.current = editor)}
				initialValue="<p>To jest pierwsza aktualnosc</p>"
				init={{
					width: "80vw",
					height: "40vh",
					menubar: true,
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
						"tinydrive",
						"insertfile",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help" +
						"insertfile",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			<h2>Edytor od zdjecia</h2>
			<Editor
				apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
				onInit={(evt, editor) => (editorRef4.current = editor)}
				initialValue="<p>To jest pierwsza aktualnosc</p>"
				init={{
					width: "80vw",
					height: "40vh",
					menubar: true,
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
						"tinydrive",
						"insertfile",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help" +
						"insertfile",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			<h2>Edytor od autora</h2>
			<Editor
				apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
				onInit={(evt, editor) => (editorRef5.current = editor)}
				initialValue="<p>To jest pierwsza aktualnosc</p>"
				init={{
					width: "80vw",
					height: "40vh",
					menubar: true,
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
						"tinydrive",
						"insertfile",
					],
					toolbar:
						"undo redo | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help" +
						"insertfile",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			<button onClick={handleDataShow}>Show me what u are writing</button>
			<button onClick={handlerSendData}>
				Send Dane to do serwera przyjacielu
			</button>
			<div dangerouslySetInnerHTML={{ __html: title }}></div>
			<div dangerouslySetInnerHTML={{ __html: subtitle }}></div>
			<div dangerouslySetInnerHTML={{ __html: author }}></div>
			<div dangerouslySetInnerHTML={{ __html: content }}></div>
			<div dangerouslySetInnerHTML={{ __html: image }}></div>
		</>
	);
};

export default EditorActu1;
