import React, {useState, Suspense} from 'react'
import './App.css'

const LazyDropdown = React.lazy(() => import('@Dropdown/Dropdown'));

function App() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="App">
            <div className="card">
                <button onClick={() => setShowDropdown(true)}>
                    load dropdown
                </button>
                {showDropdown && (
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <LazyDropdown
                            id="dropdown1"
                            label="Brands"
                            items={[
                                {
                                    key: 'apple',
                                    value: 'Apple'
                                },
                                {
                                    key: 'samsung',
                                    value: 'Samsung'
                                },
                                {
                                    key: 'lenovo',
                                    value: 'Lenovo'
                                }
                            ]}
                        />
                    </Suspense>
                )}
            </div>
        </div>
    )
}

export default App
