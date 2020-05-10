const activities = ['soccer', "basketball", "football", "swimming"];

exports.getActivitiesHome = (req, res, next) => {
    // Request handling
    // CORE CHALLENGE 1 -
    // HTML page is written
    res.write('<html>');
    res.write('<head><title>Hello Browser!</Title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to my world!</h1>');
    // navigation to your activities endpoint.
    res.write('<a href="/">Home</a></br>')
    res.write('<a href="ta01/activities">Activities List</a></br>');
    // These are navigation links for the stretch challenges
    res.write('<a href="ta01/stretch-1">Stretch 1 (CSS)</a></br>');
    res.write('<a href="ta01/stretch-2">Stretch 2 (Write Form input to text input)</a></br>');
    res.write('<a href="ta01/stretch-3">Stretch 3 (Add two number inputs together)</a></br>');
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
};

exports.getActivities = (req, res, next) => {
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    // Loop through activities using for...of loop to display the list
    for (const activity of activities) {
        res.write(`<li>${activity}</li>`);
    }
    res.write('</ul>');
    // Form for "./add-activity".
    res.write('<form action="./add-activity" method="POST">');
    res.write('<input type="text" name="newActivity">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    // End tags
    res.write('</body>');
    res.write('</html>');
    return res.end(); // Return so you don't execute remaining code outside of if statement
};

exports.postAddActivity = (req, res, next) => {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const newActivity = parsedBody.split('=')[1];
        // Console log seen in terminal, may be encoded, but isn't important for now
        console.log(newActivity);
        activities.push(newActivity);

        // Remain on './activities' url.
        res.writeHead(302, {'Location': 'activities'});
        res.end();
    });
};