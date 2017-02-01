/**
 * Copyright 2016-2017 by Petrivnyk
 * https://www.facebook.com/profile.php?id=100005683967607
 * https://vk.com/lubomyr_petrivnyk
 * l.petrivnyk@gmail.com */

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

//First circle Progressbar
var bar_first = new ProgressBar.Circle(circle_first, {
    color: '#1718ff',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#40ff43', width: 3 },
    to: { color: '#0bab07', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100) + ' %';
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_first.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar_first.text.style.fontSize = '42px';

bar_first.animate(0.99);  // Number from 0.0 to 1.0


//Second circle Progressbar
var bar_second = new ProgressBar.Circle(circle_second, {
    color: '#01f0ff',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#ff95e8', width: 1 },
    to: { color: '#ff20d4', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_second.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar_second.text.style.fontSize = '42px';

bar_second.animate(0.75);  // Number from 0.0 to 1.0

//Third circle Progressbar
var bar_third = new ProgressBar.Circle(circle_third, {
    color: '#1718ff',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 4,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#fff114', width: 1 },
    to: { color: '#13ff0e', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_third.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar_third.text.style.fontSize = '42px';

bar_third.animate(0.5);  // Number from 0.0 to 1.0

//Fourth circle Progressbar
var bar_fourth = new ProgressBar.Circle(circle_fourth, {
    color: '#01f0ff',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#ff95e8', width: 1 },
    to: { color: '#ff20d4', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_fourth.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar_fourth.text.style.fontSize = '42px';

bar_fourth.animate(0.75);  // Number from 0.0 to 1.0