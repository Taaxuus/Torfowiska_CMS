import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";

const EditorActu = ({ title, subtitle, image, author, content, id }) => {
	const [stateTitle, setTitle] = useState(title);
	const [stateSubtitle, setSubtitle] = useState(subtitle);
	const [stateImage, setImage] = useState(image);
	const [stateAuthor, setAuthor] = useState(author);
	const [stateContent, setContent] = useState(content);

	const editorRef1 = useRef(null);
	const editorRef2 = useRef(null);
	const editorRef3 = useRef(null);
	const editorRef4 = useRef(null);
	const editorRef5 = useRef(null);

	//Data on change updating of each form
	const handleTitleChange = () => {
		setTitle(editorRef1.current.getContent());
	};
	const handleSubTitleChange = () => {
		setSubtitle(editorRef2.current.getContent());
	};
	const handleContentChange = () => {
		setContent(editorRef3.current.getContent());
	};
	const handleImageChange = () => {
		setImage(editorRef4.current.getContent());
	};
	const handleAuthorChange = () => {
		setAuthor(editorRef5.current.getContent());
	};

	const handlerSendData = async () => {
		if (id && stateTitle && stateSubtitle && stateImage && stateContent) {
			// send a request to the server.
			try {
				const body = {
					id: id,
					title: stateTitle,
					subtitle: stateSubtitle,
					image: stateImage,
					content: stateContent,
					author: stateAuthor,
				};
				await fetch("/api/actu", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				console.log("Data sent successfully");
				alert("Dane na serwerze zaaktualizowane ");
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
			<div className="actus__editor">
				<h2>Edytor od tytulu</h2>
				<Editor
					onChange={handleTitleChange}
					apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
					onInit={(evt, editor) => (editorRef1.current = editor)}
					initialValue={stateTitle}
					init={{
						selector: "textarea",
						forced_root_block: false,
						force_br_newlines: true,
						force_p_newlines: true,
						width: "80vw",
						height: "20vh",
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
					onChange={handleSubTitleChange}
					apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
					onInit={(evt, editor) => (editorRef2.current = editor)}
					initialValue={stateSubtitle}
					init={{
						width: "80vw",
						height: "20vh",
						menubar: true,
						plugins: [
							"advlist",
							"autolink",
							"lists",
							"link",

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
					onChange={handleContentChange}
					apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
					onInit={(evt, editor) => (editorRef3.current = editor)}
					initialValue={stateContent}
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
					onChange={handleImageChange}
					apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
					onInit={(evt, editor) => (editorRef4.current = editor)}
					init={{
						width: "80vw",
						height: "20vh",
						menubar: true,
						plugins: ["image"],
						toolbar: "image",
						content_style:
							"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
					}}
				/>
				<h2>Edytor od autora</h2>
				<Editor
					onChange={handleAuthorChange}
					apiKey="y3u7eqq2k4olfmzjs6q11qf131aok1eakxz7m1biag94dcfv"
					onInit={(evt, editor) => (editorRef5.current = editor)}
					initialValue={stateAuthor}
					init={{
						width: "80vw",
						height: "20vh",
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

				<button onClick={handlerSendData}>
					Send Dane do serwera przyjacielu
				</button>
			</div>
		</>
	);
};

export default EditorActu;
