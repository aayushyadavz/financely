import moment from 'moment'
import { toast } from 'react-toastify'
import { addDoc, collection, getDocs, query } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react'

const useGoogleFirestore = () => {

    const [user] = useAuthState(auth)
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(false)

    function onFinish(values, type) {
        const transactions = {
            type: type,
            name: values.name,
            tag: values.tag,
            amount: parseFloat(values.amount),
            date: moment(values.date).format('YYYY-MM-DD'),
        }
        addTransactions(transactions)
    }

    async function addTransactions(transactions) {
        try {
            const docRef = await addDoc(collection(db, `user/${user.uid}/transactions`), transactions)
            console.log("Document written with ID: ", docRef.id);

            await fetchTransactions()
            toast.success("Transaction added successfully")
        } catch (error) {
            console.error("Error adding transaction:", error)
            toast.error("Error adding transaction")
        }
    }

    async function fetchTransactions() {
        setLoading(true)
        if (user) {
            const q = query(collection(db, `user/${user.uid}/transactions`));
            const querySnapshot = await getDocs(q);
            const transactionsArray = []
            querySnapshot.forEach((doc) => {
                transactionsArray.push(doc.data())
            });
            setTransactions(transactionsArray)
            console.log(transactionsArray);
            toast.success("Transactions fetched successfully")
        }
        setLoading(false)
    }

    return { fetchTransactions, loading, onFinish, transactions }
}

export default useGoogleFirestore