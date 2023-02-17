import axios from "axios";

const instance = axios.create({
	baseURL: "http://129.151.44.27:31978/api/",
});

export default instance;
