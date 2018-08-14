function getRepositories() {
  console.log("Hi Jon")
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
