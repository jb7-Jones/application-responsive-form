// NAME: allow only letters and space
document.getElementById('name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

// CONTACT: allow only digits, max 10
document.getElementById('contact').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

// FORM SUBMIT
document.getElementById("mainForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});


// -------------------------------------------------------------
//   API BUTTON FUNCTIONALITY (FETCH ALL POSTS & SHOW TABLE)
// -------------------------------------------------------------

const apiBtn = document.getElementById("apiBtn");
const apiTableContainer = document.getElementById("apiTableContainer");

// apiBtn.addEventListener("click", function () {

//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {

//             // Start table
//             let tableHTML = `
//                 <table class="api-table" border="1" cellpadding="10" 
//                     style="border-collapse:collapse; width:100%; font-size:14px;">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>User ID</th>
//                             <th>Title</th>
//                             <th>Body</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//             `;

//             // Loop through ALL posts
//             data.forEach(post => {
//                 tableHTML += `
//                     <tr>
//                         <td>${post.id}</td>
//                         <td>${post.userId}</td>
//                         <td>${post.title}</td>
//                         <td>${post.body}</td>
//                     </tr>
//                 `;
//             });

//             // Close table
//             tableHTML += `
//                     </tbody>
//                 </table>
//             `;

//             apiTableContainer.innerHTML = tableHTML;
//         })
//         .catch(error => {
//             apiTableContainer.innerHTML =
//                 "<p style='color:red; font-weight:bold;'>Failed to fetch API data.</p>";
//             console.error(error);
//         });
// });
// -------------------------------------------------------------
//   API BUTTON FUNCTIONALITY (POST REQUEST & SHOW RESULT)
// -------------------------------------------------------------

apiBtn.addEventListener("click", function () {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: "Sample Title",
            body: "This is sample content from POST API",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {

        //     // Create table for POST response
        //     let tableHTML = `
        //         <table class="api-table" border="1" cellpadding="10"
        //             style="border-collapse:collapse; width:100%; font-size:14px;">
        //             <thead>
        //                 <tr>
        //                     <th>ID</th>
        //                     <th>User ID</th>
        //                     <th>Title</th>
        //                     <th>Body</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>${data.id}</td>
        //                     <td>${data.userId}</td>
        //                     <td>${data.title}</td>
        //                     <td>${data.body}</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     `;

        //     apiTableContainer.innerHTML = tableHTML;
        // })
        // .catch(error => {
        //     apiTableContainer.innerHTML =
        //         "<p style='color:red; font-weight:bold;'>POST request failed.</p>";
        //     console.error(error);
        // });
        apiBtn.addEventListener("click", function () {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "This is the updated body from PUT request.",
            userId: 1
        })
    })
        .then(response => response.json())
        .then(data => {

            let tableHTML = `
                <table class="api-table" border="1" cellpadding="10" 
                       style="border-collapse:collapse; width:100%; font-size:14px;">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${data.id}</td>
                            <td>${data.userId}</td>
                            <td>${data.title}</td>
                            <td>${data.body}</td>
                        </tr>
                    </tbody>
                </table>
            `;

            apiTableContainer.innerHTML = tableHTML;
        })
        .catch(error => {
            apiTableContainer.innerHTML =
                "<p style='color:red; font-weight:bold;'>PUT request failed.</p>";
            console.error(error);
        });

});

});
})