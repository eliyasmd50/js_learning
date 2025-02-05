// uuid creation function
const uid = () => {
    const uid = crypto.randomUUID();
    return uid
}


// Event Simulation for the particular devices
document.getElementById('button').addEventListener('click', () => {
    console.log(uid());
    let data = {
        id: uid(),
        deviceid: uid()
    }
    let tx = db.transaction()
});