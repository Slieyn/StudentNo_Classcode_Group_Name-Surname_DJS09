const currentLocation: [string, string, number] = ['London', '11.03', 17]
export default currentLocation

const footer = document.querySelector('.footer') as HTMLElement | null

if (footer) {
    footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`
}
