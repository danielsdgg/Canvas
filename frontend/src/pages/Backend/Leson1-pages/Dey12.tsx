import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey12: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>

                {/* Title */}
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Data Structures and Algorithms
                </h1>

                {/* Introduction */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Introduction</h2>
                <p className="text-gray-700 text-lg">
                    Data Structures and Algorithms (DSA) are fundamental concepts in computer science that help in efficient problem-solving.
                    Data structures organize and store data, while algorithms define the step-by-step process to solve computational problems.
                </p>

                {/* Importance */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚡ Importance of Data Structures and Algorithms</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li>Enhance efficiency in solving computational problems.</li>
                    <li>Optimize memory and time complexity.</li>
                    <li>Improve problem-solving skills for competitive programming and coding interviews.</li>
                    <li>Used in real-world applications like databases, networking, and AI.</li>
                </ul>

                {/* Types of Data Structures */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📂 Types of Data Structures</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li><strong>Linear Data Structures</strong> - Arrays, Linked Lists, Stacks, Queues</li>
                    <li><strong>Non-Linear Data Structures</strong> - Trees, Graphs, Hash Tables</li>
                </ul>

                {/* Types of Algorithms */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔢 Types of Algorithms</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li>Sorting Algorithms - Bubble Sort, Merge Sort, Quick Sort</li>
                    <li>Searching Algorithms - Binary Search, Linear Search</li>
                    <li>Graph Algorithms - Dijkstra’s Algorithm, BFS, DFS</li>
                    <li>Dynamic Programming - Fibonacci Sequence, Knapsack Problem</li>
                </ul>

                {/* Practical Examples */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🛠️ Practical Examples</h2>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">1️⃣ Implementing a Stack using Python</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">2️⃣ Searching an Element using Binary Search</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔚 Conclusion</h2>
                <p className="text-gray-700 text-lg">
                    Mastering Data Structures and Algorithms is essential for efficient problem-solving and optimizing computational resources.
                    Understanding these concepts prepares you for coding interviews, real-world software development, and competitive programming.
                </p>

                {/* Resources */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Learning</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li>"Introduction to Algorithms" by Cormen (CLRS)</li>
                    <li>LeetCode & CodeSignal for practicing DSA problems</li>
                    <li>GeeksforGeeks & TutorialsPoint for theoretical concepts</li>
                    <li>Udemy & Coursera for structured online courses</li>
                </ul>
            </section>
        </>
    );
};

export default Dey12;