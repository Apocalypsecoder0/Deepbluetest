/**
 * Code Templates for Guest Mode
 * Comprehensive collection of starter templates for different programming languages
 */

export interface CodeTemplate {
  id: string;
  name: string;
  description: string;
  language: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  files: Array<{
    name: string;
    path: string;
    content: string;
    language: string;
    isDirectory: boolean;
  }>;
}

export const codeTemplates: CodeTemplate[] = [
  // Game Development Template
  {
    id: 'game-pong',
    name: 'Pong Game',
    description: 'Classic Pong game with HTML5 Canvas',
    language: 'javascript',
    category: 'Game Development',
    difficulty: 'intermediate',
    tags: ['canvas', 'game', 'animation', 'collision'],
    files: [
      {
        name: 'index.html',
        path: '/index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pong Game - DeepBlue IDE</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Courier New', monospace;
            color: white;
        }
        #gameContainer {
            text-align: center;
        }
        canvas {
            border: 2px solid #fff;
            background: #111;
        }
        #controls {
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 0 10px;
            background: #333;
            color: white;
            border: none;
            cursor: pointer;
            font-family: inherit;
        }
        button:hover {
            background: #555;
        }
        #score {
            font-size: 24px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div id="gameContainer">
        <h1>🏓 PONG GAME</h1>
        <div id="score">Player: 0 | AI: 0</div>
        <canvas id="gameCanvas" width="800" height="400"></canvas>
        <div id="controls">
            <button onclick="game.start()">Start</button>
            <button onclick="game.pause()">Pause</button>
            <button onclick="game.reset()">Reset</button>
        </div>
        <p>Use W/S keys or Arrow keys to move paddle</p>
    </div>
    <script src="pong.js"></script>
</body>
</html>`,
        language: 'html',
        isDirectory: false
      },
      {
        name: 'pong.js',
        path: '/pong.js',
        content: `class PongGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score');
        
        // Game state
        this.gameRunning = false;
        this.animationId = null;
        
        // Game objects
        this.ball = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
            dx: 5,
            dy: 3,
            radius: 10,
            speed: 5
        };
        
        this.player = {
            x: 10,
            y: this.canvas.height / 2 - 50,
            width: 10,
            height: 100,
            speed: 8,
            score: 0
        };
        
        this.ai = {
            x: this.canvas.width - 20,
            y: this.canvas.height / 2 - 50,
            width: 10,
            height: 100,
            speed: 6,
            score: 0
        };
        
        // Input handling
        this.keys = {};
        this.setupInputHandlers();
    }
    
    setupInputHandlers() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    update() {
        if (!this.gameRunning) return;
        
        // Player movement
        if (this.keys['KeyW'] || this.keys['ArrowUp']) {
            this.player.y = Math.max(0, this.player.y - this.player.speed);
        }
        if (this.keys['KeyS'] || this.keys['ArrowDown']) {
            this.player.y = Math.min(this.canvas.height - this.player.height, this.player.y + this.player.speed);
        }
        
        // AI movement (follows ball with some lag)
        const aiCenter = this.ai.y + this.ai.height / 2;
        const ballCenter = this.ball.y;
        
        if (aiCenter < ballCenter - 35) {
            this.ai.y = Math.min(this.canvas.height - this.ai.height, this.ai.y + this.ai.speed);
        } else if (aiCenter > ballCenter + 35) {
            this.ai.y = Math.max(0, this.ai.y - this.ai.speed);
        }
        
        // Ball movement
        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
        
        // Ball collision with top/bottom walls
        if (this.ball.y <= this.ball.radius || this.ball.y >= this.canvas.height - this.ball.radius) {
            this.ball.dy = -this.ball.dy;
        }
        
        // Ball collision with paddles
        if (this.checkCollision(this.ball, this.player)) {
            this.ball.dx = -this.ball.dx;
            this.ball.x = this.player.x + this.player.width + this.ball.radius;
            // Add some spin based on where it hits the paddle
            const hitPos = (this.ball.y - this.player.y) / this.player.height;
            this.ball.dy = (hitPos - 0.5) * 10;
        }
        
        if (this.checkCollision(this.ball, this.ai)) {
            this.ball.dx = -this.ball.dx;
            this.ball.x = this.ai.x - this.ball.radius;
            // Add some spin
            const hitPos = (this.ball.y - this.ai.y) / this.ai.height;
            this.ball.dy = (hitPos - 0.5) * 10;
        }
        
        // Ball goes off screen (scoring)
        if (this.ball.x < 0) {
            this.ai.score++;
            this.resetBall();
        } else if (this.ball.x > this.canvas.width) {
            this.player.score++;
            this.resetBall();
        }
        
        this.updateScore();
    }
    
    checkCollision(ball, paddle) {
        return ball.x - ball.radius < paddle.x + paddle.width &&
               ball.x + ball.radius > paddle.x &&
               ball.y - ball.radius < paddle.y + paddle.height &&
               ball.y + ball.radius > paddle.y;
    }
    
    resetBall() {
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height / 2;
        this.ball.dx = -this.ball.dx; // Serve to the other side
        this.ball.dy = (Math.random() - 0.5) * 6;
    }
    
    updateScore() {
        this.scoreElement.textContent = \`Player: \${this.player.score} | AI: \${this.ai.score}\`;
    }
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw center line
        this.ctx.setLineDash([5, 5]);
        this.ctx.strokeStyle = '#444';
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        // Draw paddles
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
        this.ctx.fillRect(this.ai.x, this.ai.y, this.ai.width, this.ai.height);
        
        // Draw ball
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Add glow effect to ball
        this.ctx.shadowColor = '#fff';
        this.ctx.shadowBlur = 10;
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
    }
    
    gameLoop() {
        this.update();
        this.draw();
        
        if (this.gameRunning) {
            this.animationId = requestAnimationFrame(() => this.gameLoop());
        }
    }
    
    start() {
        if (!this.gameRunning) {
            this.gameRunning = true;
            this.gameLoop();
            console.log('🏓 Pong game started!');
        }
    }
    
    pause() {
        this.gameRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        console.log('⏸️ Game paused');
    }
    
    reset() {
        this.pause();
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height / 2;
        this.ball.dx = 5;
        this.ball.dy = 3;
        this.player.y = this.canvas.height / 2 - 50;
        this.ai.y = this.canvas.height / 2 - 50;
        this.player.score = 0;
        this.ai.score = 0;
        this.updateScore();
        this.draw();
        console.log('🔄 Game reset');
    }
}

// Initialize game
const game = new PongGame();
game.draw(); // Draw initial state

// Auto-start message
console.log('🎮 Pong Game loaded! Click Start to begin playing.');
console.log('🎯 Use W/S or Arrow keys to control your paddle.');`,
        language: 'javascript',
        isDirectory: false
      }
    ]
  },

  // Node.js API Template
  {
    id: 'node-api',
    name: 'REST API Server',
    description: 'Express.js REST API with user management',
    language: 'javascript',
    category: 'Backend',
    difficulty: 'intermediate',
    tags: ['node', 'express', 'api', 'rest'],
    files: [
      {
        name: 'server.js',
        path: '/server.js',
        content: `const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store (in production, use a real database)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
];

let nextId = 4;

// Helper functions
const findUserById = (id) => users.find(user => user.id === parseInt(id));
const findUserByEmail = (email) => users.find(user => user.email === email);

// Routes

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: '1.0.0'
    });
});

// Get all users
app.get('/api/users', (req, res) => {
    const { role, search } = req.query;
    let filteredUsers = users;
    
    if (role) {
        filteredUsers = filteredUsers.filter(user => user.role === role);
    }
    
    if (search) {
        filteredUsers = filteredUsers.filter(user => 
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    res.json({
        users: filteredUsers,
        total: filteredUsers.length,
        timestamp: new Date().toISOString()
    });
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const user = findUserById(req.params.id);
    
    if (!user) {
        return res.status(404).json({ 
            error: 'User not found',
            id: req.params.id 
        });
    }
    
    res.json(user);
});

// Create new user
app.post('/api/users', (req, res) => {
    const { name, email, role = 'user' } = req.body;
    
    // Validation
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Name and email are required',
            received: { name, email }
        });
    }
    
    if (findUserByEmail(email)) {
        return res.status(409).json({ 
            error: 'User with this email already exists',
            email 
        });
    }
    
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Invalid email format',
            email 
        });
    }
    
    const newUser = {
        id: nextId++,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        role,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
});

// Update user
app.put('/api/users/:id', (req, res) => {
    const user = findUserById(req.params.id);
    
    if (!user) {
        return res.status(404).json({ 
            error: 'User not found',
            id: req.params.id 
        });
    }
    
    const { name, email, role } = req.body;
    
    // Validate email if provided
    if (email) {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format',
                email 
            });
        }
        
        // Check if email is already taken by another user
        const existingUser = findUserByEmail(email);
        if (existingUser && existingUser.id !== user.id) {
            return res.status(409).json({ 
                error: 'Email already taken by another user',
                email 
            });
        }
    }
    
    // Update user fields
    if (name) user.name = name.trim();
    if (email) user.email = email.toLowerCase().trim();
    if (role) user.role = role;
    user.updatedAt = new Date().toISOString();
    
    res.json({
        message: 'User updated successfully',
        user
    });
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));
    
    if (userIndex === -1) {
        return res.status(404).json({ 
            error: 'User not found',
            id: req.params.id 
        });
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    res.json({
        message: 'User deleted successfully',
        user: deletedUser
    });
});

// Statistics endpoint
app.get('/api/stats', (req, res) => {
    const usersByRole = users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {});
    
    res.json({
        totalUsers: users.length,
        usersByRole,
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        path: req.originalUrl,
        method: req.method
    });
});

// Start server
app.listen(PORT, () => {
    console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
    console.log(\`📚 API Documentation:\`);
    console.log(\`   GET    /health           - Health check\`);
    console.log(\`   GET    /api/users        - Get all users\`);
    console.log(\`   GET    /api/users/:id    - Get user by ID\`);
    console.log(\`   POST   /api/users        - Create new user\`);
    console.log(\`   PUT    /api/users/:id    - Update user\`);
    console.log(\`   DELETE /api/users/:id    - Delete user\`);
    console.log(\`   GET    /api/stats        - Get statistics\`);
    console.log('\\n🌊 Built with DeepBlue IDE');
});`,
        language: 'javascript',
        isDirectory: false
      },
      {
        name: 'package.json',
        path: '/package.json',
        content: `{
  "name": "deepblue-api-server",
  "version": "1.0.0",
  "description": "REST API server built with Express.js in DeepBlue IDE",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \\"Run tests here\\" && exit 0"
  },
  "keywords": [
    "api",
    "express",
    "rest",
    "nodejs",
    "deepblue-ide"
  ],
  "author": "DeepBlue IDE User",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}`,
        language: 'json',
        isDirectory: false
      }
    ]
  },

  // Machine Learning Template
  {
    id: 'ml-classifier',
    name: 'Image Classifier',
    description: 'Simple image classification with TensorFlow.js',
    language: 'javascript',
    category: 'Machine Learning',
    difficulty: 'advanced',
    tags: ['ml', 'tensorflow', 'ai', 'classification'],
    files: [
      {
        name: 'index.html',
        path: '/index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Classifier - DeepBlue IDE</title>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@latest"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            color: white;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2.5rem;
        }
        .upload-area {
            border: 3px dashed rgba(255, 255, 255, 0.5);
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            margin-bottom: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .upload-area:hover {
            border-color: rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.05);
        }
        .upload-area.dragover {
            border-color: #fff;
            background: rgba(255, 255, 255, 0.1);
        }
        #imageInput {
            display: none;
        }
        #imagePreview {
            max-width: 100%;
            max-height: 400px;
            border-radius: 10px;
            margin: 20px 0;
            display: none;
        }
        .results {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            display: none;
        }
        .prediction {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .prediction:last-child {
            border-bottom: none;
        }
        .confidence-bar {
            width: 200px;
            height: 20px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        .confidence-fill {
            height: 100%;
            background: linear-gradient(90deg, #4CAF50, #8BC34A);
            border-radius: 10px;
            transition: width 0.3s ease;
        }
        .loading {
            text-align: center;
            padding: 20px;
            display: none;
        }
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 10px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        button {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🤖 AI Image Classifier</h1>
        <p style="text-align: center; opacity: 0.9;">
            Upload an image and let AI identify what's in it using MobileNet
        </p>
        
        <div class="upload-area" onclick="document.getElementById('imageInput').click()">
            <h3>📸 Click here or drag & drop an image</h3>
            <p>Supports JPG, PNG, and GIF files</p>
            <input type="file" id="imageInput" accept="image/*">
        </div>
        
        <div style="text-align: center;">
            <img id="imagePreview" alt="Preview">
            <br>
            <button id="classifyBtn" onclick="classifyImage()" disabled>
                🔍 Classify Image
            </button>
            <button onclick="loadSampleImage()">
                🖼️ Try Sample Image
            </button>
        </div>
        
        <div class="loading" id="loading">
            <div class="spinner"></div>
            <p>AI is analyzing the image...</p>
        </div>
        
        <div class="results" id="results">
            <h3>🎯 Classification Results</h3>
            <div id="predictions"></div>
        </div>
    </div>
    
    <script src="classifier.js"></script>
</body>
</html>`,
        language: 'html',
        isDirectory: false
      },
      {
        name: 'classifier.js',
        path: '/classifier.js',
        content: `class ImageClassifier {
    constructor() {
        this.model = null;
        this.isModelLoaded = false;
        this.initializeElements();
        this.setupEventListeners();
        this.loadModel();
    }
    
    initializeElements() {
        this.imageInput = document.getElementById('imageInput');
        this.imagePreview = document.getElementById('imagePreview');
        this.classifyBtn = document.getElementById('classifyBtn');
        this.loading = document.getElementById('loading');
        this.results = document.getElementById('results');
        this.predictions = document.getElementById('predictions');
        this.uploadArea = document.querySelector('.upload-area');
    }
    
    setupEventListeners() {
        // File input change
        this.imageInput.addEventListener('change', (e) => {
            this.handleImageSelect(e.target.files[0]);
        });
        
        // Drag and drop
        this.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadArea.classList.add('dragover');
        });
        
        this.uploadArea.addEventListener('dragleave', () => {
            this.uploadArea.classList.remove('dragover');
        });
        
        this.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadArea.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.handleImageSelect(file);
            }
        });
    }
    
    async loadModel() {
        try {
            console.log('🧠 Loading MobileNet model...');
            this.model = await mobilenet.load();
            this.isModelLoaded = true;
            console.log('✅ Model loaded successfully!');
        } catch (error) {
            console.error('❌ Error loading model:', error);
            alert('Failed to load AI model. Please check your internet connection.');
        }
    }
    
    handleImageSelect(file) {
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            this.imagePreview.src = e.target.result;
            this.imagePreview.style.display = 'block';
            this.classifyBtn.disabled = !this.isModelLoaded;
            this.results.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
    
    async classifyImage() {
        if (!this.model || !this.imagePreview.src) {
            alert('Please load an image first and ensure the model is loaded.');
            return;
        }
        
        try {
            this.loading.style.display = 'block';
            this.results.style.display = 'none';
            
            console.log('🔍 Classifying image...');
            
            // Get predictions from the model
            const predictions = await this.model.classify(this.imagePreview);
            
            console.log('🎯 Predictions:', predictions);
            
            this.displayResults(predictions);
            
        } catch (error) {
            console.error('❌ Classification error:', error);
            alert('Error during classification. Please try again.');
        } finally {
            this.loading.style.display = 'none';
        }
    }
    
    displayResults(predictions) {
        this.predictions.innerHTML = '';
        
        predictions.slice(0, 5).forEach((prediction, index) => {
            const predictionDiv = document.createElement('div');
            predictionDiv.className = 'prediction';
            
            const confidence = Math.round(prediction.probability * 100);
            
            predictionDiv.innerHTML = \`
                <div>
                    <strong>\${index + 1}. \${prediction.className}</strong>
                    <div style="font-size: 0.9em; opacity: 0.8;">\${confidence}% confidence</div>
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: \${confidence}%"></div>
                </div>
            \`;
            
            this.predictions.appendChild(predictionDiv);
        });
        
        this.results.style.display = 'block';
        
        // Log the top prediction
        const topPrediction = predictions[0];
        console.log(\`🏆 Top prediction: \${topPrediction.className} (\${Math.round(topPrediction.probability * 100)}%)\`);
    }
    
    loadSampleImage() {
        // Create a sample image (a simple canvas drawing)
        const canvas = document.createElement('canvas');
        canvas.width = 224;
        canvas.height = 224;
        const ctx = canvas.getContext('2d');
        
        // Draw a simple cat-like shape
        ctx.fillStyle = '#FFA500';
        ctx.fillRect(0, 0, 224, 224);
        
        // Cat body
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(50, 100, 124, 80);
        
        // Cat head
        ctx.beginPath();
        ctx.arc(112, 80, 40, 0, Math.PI * 2);
        ctx.fill();
        
        // Cat ears
        ctx.beginPath();
        ctx.moveTo(85, 60);
        ctx.lineTo(95, 30);
        ctx.lineTo(105, 60);
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(120, 60);
        ctx.lineTo(130, 30);
        ctx.lineTo(140, 60);
        ctx.fill();
        
        // Cat eyes
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(100, 75, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(124, 75, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Cat nose
        ctx.beginPath();
        ctx.arc(112, 85, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Convert to image
        this.imagePreview.src = canvas.toDataURL();
        this.imagePreview.style.display = 'block';
        this.classifyBtn.disabled = !this.isModelLoaded;
        this.results.style.display = 'none';
        
        console.log('🎨 Sample image loaded - try classifying it!');
    }
}

// Initialize the classifier when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const classifier = new ImageClassifier();
    
    // Make functions globally available
    window.classifyImage = () => classifier.classifyImage();
    window.loadSampleImage = () => classifier.loadSampleImage();
    
    console.log('🤖 Image Classifier initialized!');
    console.log('📚 This demo uses TensorFlow.js and MobileNet');
    console.log('🌊 Built with DeepBlue IDE');
});`,
        language: 'javascript',
        isDirectory: false
      }
    ]
  }
];

export const getTemplatesByCategory = (category: string): CodeTemplate[] => {
  return codeTemplates.filter(template => template.category === category);
};

export const getTemplatesByLanguage = (language: string): CodeTemplate[] => {
  return codeTemplates.filter(template => template.language === language);
};

export const getTemplatesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): CodeTemplate[] => {
  return codeTemplates.filter(template => template.difficulty === difficulty);
};

export const searchTemplates = (query: string): CodeTemplate[] => {
  const lowercaseQuery = query.toLowerCase();
  return codeTemplates.filter(template => 
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export default codeTemplates;