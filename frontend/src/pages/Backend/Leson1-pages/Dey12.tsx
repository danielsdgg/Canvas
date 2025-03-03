import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Dey12: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                <FaArrowLeft className="mr-2" />
                Back
            </button>

            {/* Title */}
            <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
                <FaLaptopCode className="mr-3 text-2xl" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-center">
                    Data Structures and Algorithms
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        📌 Introduction to Data Structures and Algorithms
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Data Structures and Algorithms (DSA) are the backbone of computer science and software engineering. <strong>Data Structures</strong> provide organized ways to store and manage data, while <strong>Algorithms</strong> define systematic processes to manipulate that data and solve problems efficiently. Together, they form the foundation for building high-performance applications, from simple scripts to complex systems like search engines, social networks, and artificial intelligence.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        DSA enables developers to optimize resource usage (time and memory), tackle real-world challenges, and excel in coding interviews and competitive programming. This lesson explores key data structures, algorithm categories, practical implementations in Python, and their significance in modern software development.
                    </p>
                </section>

                {/* Importance */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚡ Importance of Data Structures and Algorithms
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Understanding DSA is crucial for writing efficient, scalable code. Here’s why they matter:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li><strong>Enhance Efficiency:</strong> Choose the right structure and algorithm to minimize execution time and resource usage.</li>
                        <li><strong>Optimize Complexity:</strong> Reduce time complexity (e.g., O(n) vs. O(n²)) and space complexity for better performance.</li>
                        <li><strong>Problem-Solving Skills:</strong> Equip developers for coding interviews and competitive programming challenges.</li>
                        <li><strong>Real-World Applications:</strong> Power technologies like databases (indexing), networking (routing), and AI (search algorithms).</li>
                        <li><strong>Scalability:</strong> Enable systems to handle large datasets and high traffic effectively.</li>
                    </ul>
                </section>

                {/* Types of Data Structures */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📂 Types of Data Structures
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Data structures are broadly categorized into <strong>linear</strong> and <strong>non-linear</strong> types, each suited to specific use cases:
                    </p>
                    <div className="space-y-4">
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Linear Data Structures</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                                <li><strong>Arrays:</strong> Fixed-size, contiguous memory locations; O(1) access, O(n) insertion/deletion.</li>
                                <li><strong>Linked Lists:</strong> Dynamic nodes linked via pointers; O(1) insertion/deletion, O(n) access.</li>
                                <li><strong>Stacks:</strong> LIFO (Last In, First Out); O(1) push/pop; used in recursion, undo operations.</li>
                                <li><strong>Queues:</strong> FIFO (First In, First Out); O(1) enqueue/dequeue; used in task scheduling.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Non-Linear Data Structures</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                                <li><strong>Trees:</strong> Hierarchical structure (e.g., Binary Trees); O(log n) search with balanced trees.</li>
                                <li><strong>Graphs:</strong> Nodes and edges; O(V+E) traversal; used in networks, maps.</li>
                                <li><strong>Hash Tables:</strong> Key-value pairs; O(1) average-case access; used in dictionaries, caches.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Types of Algorithms */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔢 Types of Algorithms
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Algorithms are categorized based on their purpose and approach. Here are key types with examples:
                    </p>
                    <div className="space-y-4">
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Sorting Algorithms</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                                <li><strong>Bubble Sort:</strong> O(n²); simple but inefficient for large datasets.</li>
                                <li><strong>Merge Sort:</strong> O(n log n); divide-and-conquer, stable sorting.</li>
                                <li><strong>Quick Sort:</strong> O(n log n) average, O(n²) worst; in-place sorting.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Searching Algorithms</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                                <li><strong>Linear Search:</strong> O(n); sequential search, works on unsorted data.</li>
                                <li><strong>Binary Search:</strong> O(log n); requires sorted data, highly efficient.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Graph Algorithms</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                                <li><strong>Dijkstra’s Algorithm:</strong> O((V+E) log V); shortest path in weighted graphs.</li>
                                <li><strong>BFS (Breadth-First Search):</strong> O(V+E); level-order traversal.</li>
                                <li><strong>DFS (Depth-First Search):</strong> O(V+E); explores deep paths first.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Dynamic Programming</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-1">
                                <li><strong>Fibonacci Sequence:</strong> O(n) with memoization; avoids redundant calculations.</li>
                                <li><strong>Knapsack Problem:</strong> O(nW); optimizes value within weight constraints.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Practical Examples */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🛠️ Practical Examples
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Below are practical implementations of data structures and algorithms in Python, complete with time complexities:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">1️⃣ Implementing a Stack</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            A <strong>Stack</strong> follows LIFO (Last In, First Out). Time complexity: O(1) for push/pop.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`class Stack:
    def __init__(self):
        self.stack = []
    
    def push(self, item):
        self.stack.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        return "Stack is empty"
    
    def is_empty(self):
        return len(self.stack) == 0
    
# Example usage
s = Stack()
s.push(10)
s.push(20)
print(s.pop())  # Output: 20`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">2️⃣ Binary Search</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            <strong>Binary Search</strong> finds an element in a sorted array. Time complexity: O(log n).
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Example usage
numbers = [1, 3, 5, 7, 9, 11]
print(binary_search(numbers, 5))  # Output: 2`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">3️⃣ Merge Sort</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            <strong>Merge Sort</strong> uses divide-and-conquer for stable sorting. Time complexity: O(n log n).
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
print(merge_sort(arr))  # Output: [11, 12, 22, 25, 34, 64, 90]`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        🔚 Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Mastering <strong>Data Structures and Algorithms</strong> is essential for efficient problem-solving, resource optimization, and building scalable software. From arrays and stacks to trees and graphs, data structures provide the foundation, while algorithms like sorting, searching, and dynamic programming offer the tools to manipulate data effectively. Understanding their time and space complexities prepares you for coding interviews, competitive programming, and real-world development challenges in databases, AI, and beyond.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Learning
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Enhance your DSA skills with these recommended resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                "Introduction to Algorithms" by Cormen (CLRS)
                            </a> - The definitive textbook on DSA.
                        </li>
                        <li>
                            <a href="https://leetcode.com/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                LeetCode
                            </a> & <a href="https://www.codesignal.com/" 
                                     className="text-indigo-600 hover:underline" 
                                     target="_blank" 
                                     rel="noopener noreferrer">
                                CodeSignal
                            </a> - Practice DSA problems.
                        </li>
                        <li>
                            <a href="https://www.geeksforgeeks.org/data-structures/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                GeeksforGeeks
                            </a> & <a href="https://www.tutorialspoint.com/data_structures_algorithms/index.htm" 
                                     className="text-indigo-600 hover:underline" 
                                     target="_blank" 
                                     rel="noopener noreferrer">
                                TutorialsPoint
                            </a> - Theoretical concepts and examples.
                        </li>
                        <li>
                            <a href="https://www.udemy.com/topic/data-structures/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Udemy
                            </a> & <a href="https://www.coursera.org/courses?query=data%20structures" 
                                     className="text-indigo-600 hover:underline" 
                                     target="_blank" 
                                     rel="noopener noreferrer">
                                Coursera
                            </a> - Structured online courses.
                        </li>
                        <li>
                            <a href="https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                YouTube - MIT DSA Lectures
                            </a> - Free video lectures from MIT.
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Dey12;