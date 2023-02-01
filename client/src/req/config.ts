import ky from "ky"

const kyFetcher = ky.create({
  prefixUrl: "http://localhost:8080/",
})

export default kyFetcher
