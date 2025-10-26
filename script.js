// Main JavaScript for QuickTools Website

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Search Functionality
function searchTools() {
    const searchTerm = document.getElementById('toolSearch').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        alert('Please enter a tool name to search');
        return;
    }

    // Tool database - yahan aap actual tools ke URLs add karenge
    const toolDatabase = {
        'pdf to word': 'tools/pdf-to-word.html',
        'word to pdf': 'tools/word-to-pdf.html',
        'pdf to jpg': 'tools/pdf-to-jpg.html',
        'jpg to pdf': 'tools/jpg-to-pdf.html',
        'merge pdf': 'tools/merge-pdf.html',
        'split pdf': 'tools/split-pdf.html',
        'compress pdf': 'tools/compress-pdf.html',
        'pdf password remover': 'tools/pdf-password-remover.html',
        'word counter': 'tools/word-counter.html',
        'grammar checker': 'tools/grammar-checker.html',
        'plagiarism checker': 'tools/plagiarism-checker.html',
        'case converter': 'tools/case-converter.html',
        'lorem ipsum': 'tools/lorem-ipsum.html',
        'json formatter': 'tools/json-formatter.html',
        'image compressor': 'tools/image-compressor.html',
        'image converter': 'tools/image-converter.html',
        'image resizer': 'tools/image-resizer.html',
        'background remover': 'tools/background-remover.html',
        'qr generator': 'tools/qr-generator.html',
        'color picker': 'tools/color-picker.html',
        'hash generator': 'tools/hash-generator.html',
        'password generator': 'tools/password-generator.html',
        'base64 encoder': 'tools/base64-encoder.html',
        'uuid generator': 'tools/uuid-generator.html',
        'json validator': 'tools/json-validator.html',
        'regex tester': 'tools/regex-tester.html',
        'age calculator': 'tools/age-calculator.html',
        'unit converter': 'tools/unit-converter.html',
        'percentage calculator': 'tools/percentage-calculator.html',
        'loan calculator': 'tools/loan-calculator.html',
        'bmi calculator': 'tools/bmi-calculator.html',
        'currency converter': 'tools/currency-converter.html'
    };

    // Search for matching tool
    let foundTool = null;
    for (const [toolName, toolUrl] of Object.entries(toolDatabase)) {
        if (toolName.includes(searchTerm) || searchTerm.includes(toolName)) {
            foundTool = toolUrl;
            break;
        }
    }

    if (foundTool) {
        // Redirect to tool page
        window.location.href = foundTool;
    } else {
        alert('Tool not found. Please try a different search term.');
    }
}

// Enter key support for search
document.getElementById('toolSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchTools();
    }
});

// Navigate to specific tool
function navigateToTool(toolName) {
    const toolUrls = {
        'pdf-to-word': 'tools/pdf-to-word.html',
        'word-to-pdf': 'tools/word-to-pdf.html',
        'pdf-to-jpg': 'tools/pdf-to-jpg.html',
        'jpg-to-pdf': 'tools/jpg-to-pdf.html',
        'merge-pdf': 'tools/merge-pdf.html',
        'split-pdf': 'tools/split-pdf.html',
        'compress-pdf': 'tools/compress-pdf.html',
        'pdf-password-remover': 'tools/pdf-password-remover.html',
        'word-counter': 'tools/word-counter.html',
        'grammar-checker': 'tools/grammar-checker.html',
        'plagiarism-checker': 'tools/plagiarism-checker.html',
        'case-converter': 'tools/case-converter.html',
        'lorem-ipsum': 'tools/lorem-ipsum.html',
        'json-formatter': 'tools/json-formatter.html',
        'image-compressor': 'tools/image-compressor.html',
        'image-converter': 'tools/image-converter.html',
        'image-resizer': 'tools/image-resizer.html',
        'background-remover': 'tools/background-remover.html',
        'qr-generator': 'tools/qr-generator.html',
        'color-picker': 'tools/color-picker.html',
        'hash-generator': 'tools/hash-generator.html',
        'password-generator': 'tools/password-generator.html',
        'base64-encoder': 'tools/base64-encoder.html',
        'uuid-generator': 'tools/uuid-generator.html',
        'json-validator': 'tools/json-validator.html',
        'regex-tester': 'tools/regex-tester.html',
        'age-calculator': 'tools/age-calculator.html',
        'unit-converter': 'tools/unit-converter.html',
        'percentage-calculator': 'tools/percentage-calculator.html',
        'loan-calculator': 'tools/loan-calculator.html',
        'bmi-calculator': 'tools/bmi-calculator.html',
        'currency-converter': 'tools/currency-converter.html'
    };

    const toolUrl = toolUrls[toolName];
    if (toolUrl) {
        window.location.href = toolUrl;
    } else {
        // Agar tool page nahi bana hai to under construction page
        window.location.href = 'tools/under-construction.html';
    }
}

// Show all tools in a category
function showAllTools(category) {
    const categorySections = {
        'pdf': '#pdf-tools',
        'text': '#text-tools',
        'image': '#image-tools',
        'dev': '#dev-tools',
        'calculators': '#calculators'
    };

    const section = document.querySelector(categorySections[category]);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Recent tools functionality (using localStorage)
function getRecentTools() {
    return JSON.parse(localStorage.getItem('recentTools') || '[]');
}

function addToRecentTools(toolName) {
    const recentTools = getRecentTools();
    const index = recentTools.indexOf(toolName);
    
    if (index > -1) {
        recentTools.splice(index, 1);
    }
    
    recentTools.unshift(toolName);
    
    if (recentTools.length > 5) {
        recentTools.pop();
    }
    
    localStorage.setItem('recentTools', JSON.stringify(recentTools));
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('QuickTools Website Loaded');
    
    // Yahan aap aur initialization code add kar sakte hain
    // jaise ki recent tools display karna, analytics, etc.
});
