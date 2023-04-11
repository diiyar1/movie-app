import { ref, computed } from "vue"

const getMovies = () => {


    const film = ref([])
    const search = ref("")
    const error = ref(null)

    const load = async() => {
        try {
            let data = await fetch('http://localhost:3000/movieZfilm')
            if (!data.ok) {
                throw Error('Sorry Data Is Not Availble')
            }

            film.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(err.value);
        }
    }


    const filterMovies = computed(() => {

        return film.value.filter((movie) => {
            return movie.Title.toLowerCase().includes(search.value);

        })

    })

    return {
        search,
        film,
        filterMovies,
        error,
        load
    }



}

export default getMovies