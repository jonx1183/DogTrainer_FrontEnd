console.log("vi er i FetchBordOfDirectors fra egen database")
const urlBestyrelse = "http://localhost:8080/bestyrelse"

onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
        selectedFile: e.target.files[0]
    });
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    fetch('http://localhost:8080/bestyrelse', {
        method: 'post',
        body: formData
    }).then(res => {
        if(res.ok) {
            console.log(res.data);
            alert("File uploaded successfully.")
        }
    });
};
